<?php 
 class Komentar extends CI_Model {
    function get_data(){
        return $this->db->get('feedback');
    }

    function tambah($data){
        $this->db->insert('feedback', $data);
    }
 }
?>