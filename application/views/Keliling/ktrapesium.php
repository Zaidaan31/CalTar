<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Keliling</li>
          <li class="breadcrumb-item active">Trapesium</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Perhitungan Keliling Trapesium</h5>
                        <p>Rumus untuk perhitungan Keliling Trapesium adalah <b><i>K = sisi 1 + sisi 2 + sisi 3 + sisi 4</i><b></p>
                        <!-- Browser Default Validation -->
                        <form class="row g-3">
                        <div class="col-md-4">
                        <label class="form-label">Yang ingin di Cari</label>
                        <select id="select" class="form-select">
                            <option value="pilih">--- Pilih Opsi ---</option>
                            <option value="sisi1">Sisi 1</option>
                            <option value="sisi2">Sisi 2</option>
                            <option value="sisi3">Sisi 3</option>
                            <option value="sisi4">Sisi 4</option>
                            <option value="Keliling">Keliling</option>
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
                            <label for="validationDefault01" class="form-label">Bilangan 3 (cm)</label>
                            <input type="text" class="form-control" id="bil3" required>
                          </div>
                          <div class="col-md-4">
                            <label for="validationDefault01" class="form-label">Bilangan 4 (cm)</label>
                            <input type="text" class="form-control" id="bil4" required>
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
                <h5 class="card-title">Bentuk Trapesium</h5>
                  <img src="<?= base_url(); ?>assets/img/trapesium.jpg" width="300px">
              </div>
            </div>
          </div>
        </div>
    </section>
</main>