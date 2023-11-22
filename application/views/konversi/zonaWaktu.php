<main id="main" class="main">

    <div class="pagetitle">
      <h1><?= $title; ?></h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="<?= base_url('Beranda') ?>">Menu</a></li>
          <li class="breadcrumb-item">Konversi</li>
          <li class="breadcrumb-item active">Zona Waktu</li>
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
                        <div class="col-md-6">
                        <label class="form-label">Zona Waktu Dari</label>
                        <select id="zonaDari" class="form-select">
                            <option value="null" selected>--- Pilih Opsi ---</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="cina">China</option>
                            <option value="inggris">Inggris</option>
                            <option value="russia">Russia</option>
                            <option value="usa">Amerika</option>
                            <option value="brazil">Brazil</option>
                            <option value="afrika">Afrika Selatan</option>
                            <option value="maroko">Maroko</option>
                            <option value="australia">Australia</option>
                            <option value="selandia">New Zealand</option>
                        </select>
                        </div>
                        <div class="col-md-6">
                        <label class="form-label">Zona Waktu Ke</label>
                        <select id="zonaKe" class="form-select">
                        <option value="null" selected>--- Pilih Opsi ---</option>
                            <option value="indonesia">Indonesia</option>
                            <option value="cina">China</option>
                            <option value="inggris">Inggris</option>
                            <option value="russia">Russia</option>
                            <option value="usa">Amerika</option>
                            <option value="brazil">Brazil</option>
                            <option value="afrika">Afrika Selatan</option>
                            <option value="maroko">Maroko</option>
                            <option value="australia">Australia</option>
                            <option value="selandia">New Zealand</option>
                        </select>
                        </div>
                        <div class="col-md-6">
                        <label class="form-label">Pukul</label>
                        <input type="text" id="pukul" class="form-control" placeholder="Masukan Pukul">
                        </div>
                        <div class="col-6">
                        <label class="form-label">Hasil</label>
                        <input type="text" class="form-control" disabled id="result" value="Lakukan Konversi...">
                        </div>
                        <div class="text-center">
                        <button type="button" class="btn btn-primary" onclick="convert()">Proses</button>
                        <button type="reset" class="btn btn-secondary" id="reset">Reset</button>
                        </div>
                    </form><!-- End Multi Columns Form -->
        
                    </div>
                </div>
        
                </div>
            </div>

        </div>
          
      </div>
      <div class="col-lg-8">

<div class="card">
  <div class="card-body">
    <h5><b><i>FORMAT INPUT PUKUL MENGGUNAKAN ":", CONTOH: 10:00</i></b></h5>
  </div>
</div>

</div>
    </section>

  </main>