<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Konversi</li>
          <li class="breadcrumb-item active">Waktu</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                    <!-- Multi Columns Form -->
                    <form class="row g-3 mt-3">
                        <div class="col-md-4">
                        <label class="form-label">Waktu Dari</label>
                        <select id="waktuDari" class="form-select" onchange="ambilWaktu()">
                            <option value="null" selected>--- Pilih Opsi ---</option>
                            <option value="jam">Jam</option>
                            <option value="menit">Menit</option>
                            <option value="detik">detik</option>
                        </select>
                        </div>
                        <div class="col-md-4">
                        <label class="form-label">Waktu Ke</label>
                        <select id="waktuKe" class="form-select" onchange="ambilWaktu()">
                        <option value="null" selected>--- Pilih Opsi ---</option>
                            <option value="jam">Jam</option>
                            <option value="menit">Menit</option>
                            <option value="detik">detik</option>
                        </select>
                        </div>
                        <div class="col-md-4">
                        <label class="form-label">Lama Waktu</label>
                        <input type="text" id="waktu" class="form-control" placeholder="Masukan Angka">
                        </div>
                        <div class="col-4">
                        <label class="form-label">Hasil</label>
                        <input type="text" class="form-control" disabled id="result" value="Lakukan Konversi...">
                        </div>
                        <div class="text-center">
                        <button type="button" class="btn btn-primary" onclick="convert()">Submit</button>
                        <button type="reset" class="btn btn-secondary">Reset</button>
                        </div>
                    </form><!-- End Multi Columns Form -->
        
                    </div>
                </div>
        
                </div>
            </div>
      </div>
    </section>

  </main>