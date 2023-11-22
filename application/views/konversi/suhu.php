<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Konversi</li>
          <li class="breadcrumb-item active">Suhu</li>
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
                        <label class="form-label">Suhu Dari</label>
                        <select id="suhuDari" class="form-select" onchange="ambilSuhu()">
                            <option value="null" selected>--- Pilih Opsi ---</option>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                            <option value="reamur">Reamur</option>
                        </select>
                        </div>
                        <div class="col-md-4">
                        <label class="form-label">Suhu Ke</label>
                        <select id="suhuKe" class="form-select" onchange="ambilSuhu()">
                        <option value="null" selected>--- Pilih Opsi ---</option>
                            <option value="celsius">Celsius</option>
                            <option value="fahrenheit">Fahrenheit</option>
                            <option value="kelvin">Kelvin</option>
                            <option value="reamur">Reamur</option>
                        </select>
                        </div>
                        <div class="col-md-4">
                        <label class="form-label">Besaran Suhu</label>
                        <input type="text" id="besaran" class="form-control" placeholder="Masukan Besaran">
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