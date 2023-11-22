<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Luas</li>
          <li class="breadcrumb-item active">Persegi Panjang</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Perhitungan Luas Persegi Panjang</h5>
                        
                        <!-- Browser Default Validation -->
                        <form class="row g-3">
                        <div class="col-md-3">
                        <label class="form-label">Yang ingin di Cari</label>
                        <select id="select" class="form-select">
                            <option value="pilih">--- Pilih Opsi ---</option>
                            <option value="Panjang">Panjang</option>
                            <option value="Lebar">Lebar</option>
                            <option value="Luas">Luas</option>
                        </select>
                        </div>
                          <div class="col-md-3">
                            <label for="validationDefault01" class="form-label">Bilangan 1 (cm)</label>
                            <input type="text" class="form-control" id="bil1" required>
                          </div>
                          <div class="col-md-3">
                            <label for="validationDefault01" class="form-label">Bilangan 2 (cm)</label>
                            <input type="text" class="form-control" id="bil2" required>
                          </div>
                          <div class="col-md-3">
                            <label for="validationDefault03" class="form-label">Result (cm)</label>
                            <input type="text" class="form-control" id="pp" disabled >
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
                <h5 class="card-title">Bentuk & Rumus Persegi Panjang</h5>
                <p>Rumus untuk perhitungan Persegi Panjang adalah:<br> <b><i>Luas = panjang x lebar;</i><b><br>
                        <b><i>Panjang = luas / lebar;</i><b><br><b><i> Lebar = luas / panjang</i><b>
                        </p>
                  <img src="<?= base_url(); ?>assets/img/persegi panjang.png" width="300px">
              </div>
            </div>
          </div>
        </div>
    </section>
</main>