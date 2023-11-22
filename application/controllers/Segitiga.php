<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Segitiga extends CI_Controller {
	public function index()
	{
		$data['assets_header'] = 
		'
		<link href="' .base_url() . 'assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
		<link href="' .base_url() . 'assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
		<link href="' .base_url() . 'assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
		<link href="' .base_url() . 'assets/css/style.css" rel="stylesheet">
		';
		$data['assets_footer'] = 
		'
		<script src="' .base_url() . 'assets/vendor/apexcharts/apexcharts.min.js"></script>
		<script src="' .base_url() . 'assets/js/main.js"></script>
		<script src="' .base_url() . 'assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
		<script src="' .base_url() . 'assets/vendor/chart.js/chart.umd.js"></script>
		<script src="' .base_url() . 'assets/vendor/echarts/echarts.min.js"></script>
		<script src="' .base_url() . 'assets/vendor/quill/quill.min.js"></script>
		<script src="' .base_url() . 'assets/vendor/simple-datatables/simple-datatables.js"></script>
		<script src="' .base_url() . 'assets/vendor/tinymce/tinymce.min.js"></script>
		<script src="' .base_url() . 'assets/vendor/php-email-form/validate.js"></script>
		<script src="' .base_url() . 'assets/js/src/segitiga.js"></script>
		';
        $data['title'] = 'Halaman Luas Segitiga';
		$this->load->view('templates/header.php', $data);
		$this->load->view('templates/sidebar.php');
		$this->load->view('templates/modal.php', $data);
		$this->load->view('luas/segitiga.php');
		$this->load->view('templates/footer.php', $data);
	}
}
