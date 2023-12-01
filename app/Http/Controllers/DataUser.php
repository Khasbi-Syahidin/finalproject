<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\User;
use Illuminate\Http\Request;

class DataUser extends Controller
{
    public function index()
    {
        $users = User::all();
        // dd($users);
        return inertia::render('PanelAdmin/User', ['users' => $users]);
    }
    public function create()
    {
        // $users = User::all();
        // dd($users);
        return inertia::render('PanelAdmin/FormTambahUser');
    }
}
