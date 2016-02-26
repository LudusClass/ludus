<?php
/**
 * Created by PhpStorm.
 * User: celeste
 * Date: 24/02/2016
 * Time: 16:28
 */

namespace App\Services;


use App\Repositories\TurmaRepository;

class TurmaService
{
    private $turmaRepo;

    public function __construct(TurmaRepository $turmaRepo){
        $this->turmaRepo = $turmaRepo;
    }

    public function all(){
        return $this->turmaRepo->all();
    }

    public function find($id){
        return $this->turmaRepo->find($id);
    }

    public function alunos(){
        $this->turmaRepo->alunos();
    }

    public function save($turma){
        return $this->turmaRepo->save($turma);
    }

    public function delete($id){
        $turma = $this->find($id);
        return $this->turmaRepo->delete($turma);
    }
}