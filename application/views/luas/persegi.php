<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Luas</li>
          <li class="breadcrumb-item active">Persegi</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Perhitungan Persegi</h5>
                        <form class="row g-3">
                        <div class="col-md-4">
                        <label class="form-label">Yang ingin di Cari</label>
                        <select id="select" class="form-select">
                            <option value="pilih" selected>--- Pilih Opsi ---</option>
                            <option value="Sisi">Sisi</option>
                            <option value="Luas">Luas</option>
                        </select>
                        </div>
                          <div class="col-md-4">
                            <label for="validationDefault01" class="form-label">Masukkan Bilangan (cm)</label>
                            <input type="text" class="form-control" id="bil1">
                          </div>
                          <div class="col-md-4">
                            <label for="validationDefault03" class="form-label">Result (cm)</label>
                            <input type="text" class="form-control" id="result" value="" disabled>
                          </div>
                          <div class="col-12">
                            <button class="btn btn-primary" type="button" id="proses">Proses</button>
                            <button type="reset" id="reset" class="btn btn-secondary">Reset</button>
                          </div>  
                        </form>
                        <!-- End Browser Default Validation -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-6">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Bentuk & Rumus Persegi</h5>
                <p>Rumus untuk perhitungan Persegi adalah <br>
                <b><i>L = sisi x sisi</i><b><br>
                <b><i>Sisi = √luas</i><b></p>
                  <img src="<?= base_url(); ?>assets/img/persegi.png" width="300px">
              </div>
            </div>
          </div>
        </div>
    </section>
</main>