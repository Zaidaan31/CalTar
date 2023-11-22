<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Luas</li>
          <li class="breadcrumb-item active">Segitiga</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <!-- Browser Default Validation -->
                        <form class="row g-3">
                        <div class="col-md-4">
                        <label class="form-label">Yang ingin di Cari</label>
                        <select id="select" class="form-select">
                            <option value="pilih">--- Pilih Opsi ---</option>
                            <option value="Alas">Alas</option>
                            <option value="Tinggi">Tinggi</option>
                            <option value="Luas">Luas</option>
                        </select>
                        </div>
                          <div class="col-md-4">
                            <label for="validationDefault01" class="form-label">Bilangan 1 (cm)</label>
                            <input type="text" class="form-control" id="bil1" required>
                          </div>
                          <div class="col-md-4">
                            <label for="validationDefault01" class="form-label">Bilangan 2 (cm)</label>
                            <input type="text" class="form-control" id="bil2" required>
                          </div>
                          <div class="col-md-4">
                            <label for="validationDefault03" class="form-label">Result (cm)</label>
                            <input type="text" class="form-control" id="result" value="" disabled>
                          </div>
                          <div class="col-12">
                            <button class="btn btn-primary" type="button" id="proses">Proses</button>
                            <button type="reset" class="btn btn-secondary" id="reset">Reset</button>
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
                <h5 class="card-title">Bentuk dan Rumus Segitiga</h5>
                <p>Rumus untuk perhitungan Segitiga adalah <br><b><i>Luas = alas x tinggi x 1/2</i><b><br><b><i>Alas = 2 x luas / tinggi</i><b><br><b><i>Tinggi = 2 x luas / alas</i><b></p>
                  <img src="<?= base_url(); ?>assets/img/segitiga.jpg" width="300px">
              </div>
            </div>
          </div>
        </div>
    </section>
</main>