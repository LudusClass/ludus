<?php
/**
 * Created by PhpStorm.
 * User: celeste
 * Date: 21/02/2016
 * Time: 18:39
 */

namespace App\Repositories;

use \App\Turma;


class TurmaRepository
{
    /**
     * @var turma
     */
    private $turma;

    public function __construct(Turma $turma){
        $this->turma = $turma;
    }

    public function all(){
        return $this->turma->all();
    }

    public function save($input)
    {
        if(array_key_exists("id",$input))
            $turma = $this->find($input["id"]);
        else
            $turma = new Turma();
        try{
            $turma->fill($input);;
            $turma->save();
            return 1;
        }catch (\Exception $e){
            return 0;
        }
    }

    public function find($id){
        return $this->turma->find($id);
    }

    public function delete($turma){
        try{
            $turma->delete();
            return 1;
        }catch(\Exception $e){
            return 0;
        }
    }
}