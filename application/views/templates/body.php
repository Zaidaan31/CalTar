<main id="main" class="main">
    <div class="pagetitle">
      <h1>Beranda</h1>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-12">
          <div class="row">

            <!-- Sales Card -->
            <div class="col-xxl-4 col-md-12">
              <h2 class="text-center"><b>SELAMAT DATANG DI APLIKASI CalTar!</b></h2>
            </div><!-- End Sales Card -->
            <!-- Reports -->
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                <h5 class="card-title">Apa Kata Pengguna Tentang Aplikasi Ini?</h5>
                  <?php 
                  $no = 1;
                  foreach($komentar as $k) :
                  ?>
                    <div>
                      <h5><b><?= $no++ ?>. <?= $k['nama'] ?></b></h5>
                      <p class="px-4"><i><?= $k['komentar'] ?></i> - <small><?= $k['tanggal'] ?></small></p>
                    </div>
                  <?php endforeach; ?>
                </div>
              </div>
            </div>
          </div>
        </div><!-- End Left side columns -->
      </div>
    </section>
    <!-- <div class="modal fade" id="basicModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Komentar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form class="row g-3" method="post" action="<?= base_url('Feedback/tambah'); ?>">
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Nama</label>
                <input type="text" name="nama" class="form-control" placeholder="Masukan Nama..." required>
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">Komentar</label>
                <textarea name="komentar" class="form-control" placeholder="Masukan Komentar..." rows="3" required></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Kirim</button>
            </div>
          </form>
        </div>
      </div>
    </div> -->

</main><!-- End #main -->