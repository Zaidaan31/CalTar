<aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link collapsed " href="<?= base_url('beranda'); ?>">
          <i class="bi bi-grid"></i>
          <span>Beranda</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#form-konversi" data-bs-toggle="collapse" href="#">
            <i class="bi bi-journal-text"></i><span>Konversi</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="form-konversi" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="<?= base_url('suhu'); ?>">
              <i class="bi bi-circle"></i><span>Suhu</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('waktu'); ?>">
              <i class="bi bi-circle"></i><span>Waktu</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('zona'); ?>">
              <i class="bi bi-circle"></i><span>Zona Waktu</span>
            </a>
          </li>
        </ul>
    </li><!-- End Konversi Nav -->

    <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#form-luas" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Luas</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="form-luas" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
            <a href="<?= base_url('persegi'); ?>">
              <i class="bi bi-circle"></i><span>Persegi</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('persegi_panjang'); ?>">
              <i class="bi bi-circle"></i><span>Persegi Panjang</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('segitiga'); ?>">
              <i class="bi bi-circle"></i><span>Segitiga</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('lingkaran'); ?>">
              <i class="bi bi-circle"></i><span>Lingkaran</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('trapesium'); ?>">
              <i class="bi bi-circle"></i><span>Trapesium</span>
            </a>
          </li>
            </ul>
    </li><!-- End Luas Nav -->

    <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#form-keliling" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Keliling</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="form-keliling" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
            <a href="<?= base_url('kpersegi'); ?>">
              <i class="bi bi-circle"></i><span>Persegi</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('kpp'); ?>">
              <i class="bi bi-circle"></i><span>Persegi Panjang</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('ksegitiga'); ?>">
              <i class="bi bi-circle"></i><span>Segitiga</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('klingkaran'); ?>">
              <i class="bi bi-circle"></i><span>Lingkaran</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('ktrapesium'); ?>">
              <i class="bi bi-circle"></i><span>Trapesium</span>
            </a>
          </li>
            </ul>
    </li><!-- End Keliling Nav -->

    <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#volume" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Volume</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="volume" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
            <a href="<?= base_url('kubus'); ?>">
              <i class="bi bi-circle"></i><span>Kubus</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('balok'); ?>">
              <i class="bi bi-circle"></i><span>Balok</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('prisma'); ?>">
              <i class="bi bi-circle"></i><span>Prisma Segitiga</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('tabung'); ?>">
              <i class="bi bi-circle"></i><span>Tabung</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('kerucut'); ?>">
              <i class="bi bi-circle"></i><span>Kerucut</span>
            </a>
          </li>
            </ul>
    </li><!-- End Volume Nav -->

    <li class="nav-item">
        <a class="nav-link collapsed" type="button" data-bs-toggle="modal" data-bs-target="#basicModal">
          <i class="bi bi-question-circle"></i>
          <span>Feedback</span>
        </a>
      </li><!-- End Feedback Nav -->

      <!-- End Blank Page Nav -->

    </ul>

  </aside>

<!-- ======= Sidebar ======= -->
<!-- <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-heading">Menu</li>

    <li class="nav-item">
      <a class="nav-link collapsed " href="<?= base_url('beranda'); ?>">
        <i class="bi bi-grid"></i>
        <span>Beranda</span>
      </a>
    </li>

  
    <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#form-konversi" data-bs-toggle="collapse" href="#">
            <i class="bi bi-journal-text"></i><span>Konversi</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="form-konversi" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="<?= base_url('suhu'); ?>">
              <i class="bi bi-circle"></i><span>Suhu</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('waktu'); ?>">
              <i class="bi bi-circle"></i><span>Waktu</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('zona'); ?>">
              <i class="bi bi-circle"></i><span>Zona Waktu</span>
            </a>
          </li>
        </ul>
    </li>

    <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#form-luas" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Luas</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="form-luas" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
            <a href="<?= base_url('persegi'); ?>">
              <i class="bi bi-circle"></i><span>Persegi</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('persegi_panjang'); ?>">
              <i class="bi bi-circle"></i><span>Persegi Panjang</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('segitiga'); ?>">
              <i class="bi bi-circle"></i><span>Segitiga</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('lingkaran'); ?>">
              <i class="bi bi-circle"></i><span>Lingkaran</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('trapesium'); ?>">
              <i class="bi bi-circle"></i><span>Trapesium</span>
            </a>
          </li>
            </ul>
    </li>

    <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#form-keliling" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Keliling</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="form-keliling" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
            <a href="<?= base_url('kpersegi'); ?>">
              <i class="bi bi-circle"></i><span>Persegi</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('kpp'); ?>">
              <i class="bi bi-circle"></i><span>Persegi Panjang</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('ksegitiga'); ?>">
              <i class="bi bi-circle"></i><span>Segitiga</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('klingkaran'); ?>">
              <i class="bi bi-circle"></i><span>Lingkaran</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('ktrapesium'); ?>">
              <i class="bi bi-circle"></i><span>Trapesium</span>
            </a>
          </li>
            </ul>
    </li>

    <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#volume" data-bs-toggle="collapse" href="#">
              <i class="bi bi-journal-text"></i><span>Volume</span><i class="bi bi-chevron-down ms-auto"></i>
            </a>
            <ul id="volume" class="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
            <a href="<?= base_url('kubus'); ?>">
              <i class="bi bi-circle"></i><span>Kubus</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('balok'); ?>">
              <i class="bi bi-circle"></i><span>Balok</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('prisma'); ?>">
              <i class="bi bi-circle"></i><span>Prisma Segitiga</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('tabung'); ?>">
              <i class="bi bi-circle"></i><span>Tabung</span>
            </a>
          </li>
          <li>
            <a href="<?= base_url('kerucut'); ?>">
              <i class="bi bi-circle"></i><span>Kerucut</span>
            </a>
          </li>
            </ul>
    </li>

      <li class="nav-item">
        <a class="nav-link collapsed" type="button" data-bs-toggle="modal" data-bs-target="#basicModal">
          <i class="bi bi-question-circle"></i>
          <span>Feedback</span>
        </a>
      </li>
  </ul>

</aside> -->