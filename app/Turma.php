<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Turma extends Model
{
    protected $fillable = ['description', 'hour'];

    public function alunos()
    {
        return $this->hasMany(Aluno::class, 'turma_id');
    }
}
