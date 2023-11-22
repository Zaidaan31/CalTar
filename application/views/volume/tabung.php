<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Volume</li>
          <li class="breadcrumb-item active">Tabung</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">

              <!-- General Form Elements -->
              <form class="row g-3 mt-2">
                  <div class="col-md-3">
                    <label class="form-label">Yang ingin di Cari</label>
                    <select id="select" class="form-select">
                      <option value="pilih" selected>--- Pilih Opsi ---</option>
                      <option value="Luas">Luas Lingkaran</option>
                      <option value="Tinggi">Tinggi Tabung</option>
                      <option value="Volume">Volume</option>
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
                  <input type="text" class="form-control" id="result" value="" disabled>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="button" id="proses">Proses</button>
                  <button type="reset" class="btn btn-secondary" id="reset">Reset</button>
                </div>
              </form><!-- End General Form Elements -->
            </div>
          </div>

        </div>

        <div class="col-lg-6">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Bentuk Tabung</h5>
              <p>Rumus untuk perhitungan Volume Tabung adalah <br>
              <b><i>V = luas lingkaran x tinggi tabung</i><b><br>
              <b><i>Luas Lingkaran = volume / tinggi tabung</i><b><br>
              <b><i>Tinggi Tabung = volume / luas lingkaran</i><b>
              </p>
              <div class="cont">
                  <img src="<?= base_url(); ?>assets/img/tabung.gif" width="300px">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>