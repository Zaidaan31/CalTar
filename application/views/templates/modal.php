<div class="modal fade" id="basicModal" tabindex="-1">
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
  </div>