<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    protected $fillable = ['name', 'email','turma_id','birth_date','registration_date'];

    public function turma(){
        $this->belongsTo(Turma::class,'turma_id');
    }

    public function pagamento(){
        $this->hasMany(Pagamento::class,'aluno_id');
    }
}
