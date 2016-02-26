<?php
/**
 * Created by PhpStorm.
 * User: celeste
 * Date: 25/02/2016
 * Time: 15:38
 */

namespace App\Services;


use App\Aluno;
use App\Repositories\AlunoRepository;

class AlunoService
{
    private $alunoRepo;

    public function __construct(AlunoRepository $alunoRepo){
        $this->alunoRepo = $alunoRepo;
    }

    public function all(){
        return $this->alunoRepo->all();
    }

    public function find($id){
        return $this->alunoRepo->find($id);
    }

    public function findByTurma($value){
        return $this->alunoRepo->findByTurma($value);
    }

    public function turma(){
        $this->alunoRepo->turma();
    }

    public function save($input){
        //este if verifica se vamos atulizar ou
        //criar um novo aluno
        if(array_key_exists("id",$input)) {
            $aluno = $this->find($input["id"]);
        }else {
            $aluno = new Aluno();
        }
        $aluno->fill($input);
        return $this->alunoRepo->save($aluno);

    }

    public function delete($id){
        $turma = $this->find($id);
        return $this->alunoRepo->delete($turma);
    }
}