require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

app.get('/', (req, res) => {
  res.json({ status: 'OK', message: 'Backend API FIT-GIS Palu aktif' });
});

// GET: Ambil semua data lokasi + filter kategori & pencarian
app.get('/api/lokasi', async (req, res) => {
  try {
    const { search, kategori } = req.query;
    let query = supabase
      .from('lokasi_fitness')
      .select('*')
      .order('id', { ascending: true });

    if (kategori && kategori !== 'Semua') {
      query = query.eq('kategori', kategori);
    }
    if (search) {
      query = query.or(`nama_tempat.ilike.%${search}%,fasilitas.ilike.%${search}%,alamat.ilike.%${search}%`);
    }

    const { data, error } = await query;
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Tambah lokasi baru
app.post('/api/lokasi', async (req, res) => {
  try {
    const { nama_tempat, kategori, latitude, longitude, alamat, jam_buka, fasilitas, gambar_url } = req.body;
    const { data, error } = await supabase
      .from('lokasi_fitness')
      .insert([{ nama_tempat, kategori, latitude, longitude, alamat, jam_buka, fasilitas, gambar_url }])
      .select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT: Update lokasi berdasarkan ID
app.put('/api/lokasi/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nama_tempat, kategori, latitude, longitude, alamat, jam_buka, fasilitas, gambar_url } = req.body;
    const { data, error } = await supabase
      .from('lokasi_fitness')
      .update({ nama_tempat, kategori, latitude, longitude, alamat, jam_buka, fasilitas, gambar_url })
      .eq('id', id)
      .select();

    if (error) throw error;
    res.json(data[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE: Hapus lokasi berdasarkan ID
app.delete('/api/lokasi/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('lokasi_fitness')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ message: 'Data lokasi berhasil dihapus' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Backend berjalan di http://localhost:${PORT}`);
});