<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Feedback extends CI_Controller {
    public function __construct(){
        parent::__construct();
        $this->load->model('Komentar');
    }
    
	public function tambah()
	{
		$nama = $this->input->post('nama');
        $komentar = $this->input->post('komentar');
        $tanggal = date("Y/m/d");

        $data = [
            'nama' => $nama,
            'komentar' => $komentar,
            'tanggal' => $tanggal
        ];
        $this->Komentar->tambah($data);
        redirect('Beranda');
	}
}
