DROP TABLE IF EXISTS lokasi_fitness;

CREATE TABLE lokasi_fitness (
    id SERIAL PRIMARY KEY,
    nama_tempat VARCHAR(150) NOT NULL,
    kategori VARCHAR(50) NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    alamat VARCHAR(200) DEFAULT 'Kota Palu, Sulawesi Tengah',
    jam_buka VARCHAR(100) DEFAULT '06.00 - 22.00 WITA',
    fasilitas TEXT,
    gambar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE lokasi_fitness ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Akses Publik Lokasi Fitness" ON lokasi_fitness
    FOR ALL USING (true) WITH CHECK (true);

INSERT INTO lokasi_fitness (id, nama_tempat, kategori, latitude, longitude, alamat, jam_buka, fasilitas, gambar_url) VALUES
(1, 'Mustika GYM', 'Gym', -0.892747, 119.844328, 'Kec. Palu Barat, Kota Palu', '06.00 - 22.00 WITA', 'Alat beban lengkap, area kardio, loker', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(2, 'Elite Fitness', 'Gym', -0.899319, 119.845653, 'Kec. Palu Barat, Kota Palu', '06.00 - 22.00 WITA', 'Fitness center, personal trainer, ruang ganti', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(3, 'U-Fit GYM', 'Gym', -0.901053, 119.850186, 'Kec. Palu Barat, Kota Palu', '06.00 - 22.00 WITA', 'Gym & latihan kekuatan beban', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(4, 'Magenta GYM Palu', 'Gym', -0.894978, 119.862481, 'Kec. Palu Timur, Kota Palu', '06.00 - 22.00 WITA', 'Alat fitness modern, area kardio', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(5, 'Milenium GYM', 'Gym', -0.908956, 119.873019, 'Kec. Palu Selatan, Kota Palu', '06.00 - 22.00 WITA', 'Binaraga, angkat beban & kebugaran', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(6, 'The Dragon Studio & GYM', 'Gym', -0.906342, 119.880389, 'Kec. Palu Timur, Kota Palu', '06.00 - 22.00 WITA', 'Gym & studio kelas olahraga grup', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(7, 'Q-GYM Palu', 'Gym', -0.907342, 119.890547, 'Kec. Palu Timur, Kota Palu', '06.00 - 22.00 WITA', 'Fitness, dumbbell lengkap & angkat beban', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(8, 'Thor GYM Palu', 'Gym', -0.848586, 119.890650, 'Kec. Palu Utara, Kota Palu', '06.00 - 22.00 WITA', 'Pusat kebugaran & gym area Palu Utara', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(9, 'Family Training Center', 'Gym', -0.928117, 119.844606, 'Kec. Tatanga, Kota Palu', '06.00 - 21.30 WITA', 'Pusat latihan kebugaran keluarga', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(10, 'Rey Fitnes', 'Gym', -0.926569, 119.863944, 'Kec. Palu Selatan, Kota Palu', '06.00 - 22.00 WITA', 'Gym reguler, treadmill & alat beban', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(11, 'Mortal Camp', 'Martial Arts', -0.909456, 119.874311, 'Kec. Palu Selatan, Kota Palu', '15.00 - 21.30 WITA', 'Camp latihan fisik, samsak & seni bela diri', 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'),
(12, 'Catur Fit Camp', 'Gym', -0.902817, 119.883939, 'Kec. Palu Timur, Kota Palu', '06.00 - 21.00 WITA', 'Fit camp, functional & circuit training', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(13, 'Fit Club GYM', 'Gym', -0.931972, 119.901439, 'Kec. Palu Selatan, Kota Palu', '06.00 - 22.00 WITA', 'Klub kebugaran & latihan beban', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(14, 'Kelapa Gading GYM Center', 'Gym', -0.945317, 119.894450, 'Kel. Birobuli Selatan, Kota Palu', '06.00 - 22.00 WITA', 'Pusat kebugaran & gym area Palu Selatan', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(15, 'Doctor Fitness', 'Gym', -0.900203, 119.860939, 'Kec. Palu Timur, Kota Palu', '06.00 - 22.00 WITA', 'Konsultasi kebugaran, program diet & gym', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(16, 'Great Smile Club', 'Gym', -0.892181, 119.883608, 'Kec. Mantikulore, Kota Palu', '06.00 - 21.00 WITA', 'Klub kebugaran, gym & kelas senam', 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80'),
(17, 'Zfours Studio', 'Yoga & Pilates', -0.888875, 119.847081, 'Kec. Palu Barat, Kota Palu', '07.00 - 20.30 WITA', 'Studio senam, zumba & kelas kebugaran', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'),
(18, 'Dinata Studio', 'Yoga & Pilates', -0.895561, 119.893564, 'Kec. Mantikulore, Kota Palu', '07.00 - 20.30 WITA', 'Studio aerobik, yoga & kelas kebugaran', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'),
(19, 'Champion Muaythai Camp', 'Martial Arts', -0.902572, 119.861814, 'Kec. Palu Timur, Kota Palu', '15.00 - 21.30 WITA', 'Latihan Muay Thai, kickboxing & kardio', 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'),
(20, 'MOKSHA FIGHTER', 'Martial Arts', -0.924750, 119.879628, 'Kec. Palu Selatan, Kota Palu', '15.00 - 21.30 WITA', 'Camp bela diri, MMA & matras latihan', 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'),
(21, 'Nakua Fighting Club', 'Martial Arts', -0.842564, 119.883308, 'Kec. Palu Utara, Kota Palu', '15.30 - 21.30 WITA', 'Klub bela diri, sparring & fisik', 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'),
(22, 'ETC MARTIAL ARTS', 'Martial Arts', -0.904072, 119.895683, 'Kec. Mantikulore, Kota Palu', '15.00 - 21.00 WITA', 'Pelatihan seni bela diri & kebugaran', 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'),
(23, 'Rosa Pilates Studio', 'Yoga & Pilates', -0.928694, 119.890061, 'Kec. Palu Selatan, Kota Palu', '07.00 - 20.00 WITA', 'Studio khusus Pilates & postur tubuh', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'),
(24, '8 Yoga Studio', 'Yoga & Pilates', -0.898200, 119.868186, 'Kec. Palu Timur, Kota Palu', '07.00 - 20.00 WITA', 'Kelas Yoga, matras & ruang relaksasi', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'),
(25, 'Aston Palu Hotel & Conference Centre', 'Kolam Renang & Hotel', -0.904936, 119.874125, 'Jl. Wolter Monginsidi No.60, Palu', '06.00 - 21.00 WITA', 'Kolam renang outdoor & fasilitas fitness hotel', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'),
(26, 'Keykenko Yoga Studio', 'Yoga & Pilates', -0.833514, 119.882481, 'Kec. Palu Utara, Kota Palu', '07.00 - 20.00 WITA', 'Studio Yoga & senam area Palu Utara', 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'),
(27, 'Dojo MSH KKI', 'Martial Arts', -0.905511, 119.888428, 'Kec. Palu Timur, Kota Palu', '15.30 - 20.30 WITA', 'Dojo latihan Karate KKI', 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80'),
(28, 'Sutan Raja Hotel & Convention Palu', 'Kolam Renang & Hotel', -0.918706, 119.898464, 'Jl. Abdurrahman Saleh No.45, Palu', '06.00 - 21.00 WITA', 'Kolam renang luas & pusat kebugaran', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'),
(29, 'Swiss-Belhotel Silae Palu', 'Kolam Renang & Hotel', -0.876700, 119.836150, 'Jl. Malonda No.12, Silae, Palu', '06.00 - 21.00 WITA', 'Kolam renang tepi Teluk Palu, gym & sauna', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80'),
(30, 'Best Western Plus Coco Palu', 'Kolam Renang & Hotel', -0.919589, 119.887172, 'Jl. Basuki Rahmat No.127, Palu', '06.00 - 21.00 WITA', 'Kolam renang & fitness center hotel', 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80');

SELECT setval('lokasi_fitness_id_seq', (SELECT MAX(id) FROM lokasi_fitness));