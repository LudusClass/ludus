<?php
/**
 * Created by PhpStorm.
 * User: celeste
 * Date: 25/02/2016
 * Time: 04:18
 */

namespace App\Repositories;


use App\Aluno;
use Illuminate\Support\Facades\DB;

class AlunoRepository
{
    private $aluno;

    public function __construct(Aluno $aluno){
        $this->aluno = $aluno;
    }

    public function all(){
        return $this->aluno->all();
    }

    public function find($id){
        return $this->aluno->find($id);
    }

    public function findByTurma($value){
        return $this->aluno->where('turma_id','=',(int)$value)->get();
    }

    public function save($aluno){
       try{
           $aluno->save();
           return 1;
       }catch (\Exception $e){
           return 0;
       }
    }

    public function delete($aluno){
        try{
            $aluno->delete();
            return 1;
        }catch(\Exception $e){
            return 0;
        }

    }
}