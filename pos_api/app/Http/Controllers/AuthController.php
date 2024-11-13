<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $validate = $request->validated();

        $user = new User();
        $user->name = $validate['name'];
        $user->email = $validate['email'];
        $user->password = $validate['password'];
        $user->save();

        if (User::count() == 1) {
            $user->assignRole('admin');
            
        } else {
            $user->assignRole('user');
        }

        $user->roles;

        return response()->json([
            'message'   =>  'new user created successfully!',
            'data'      =>  $user
        ], 201);
    }

    public function login(LoginRequest $request)
    {
        $validate = $request->validated();

        $credentials = $request->only('email', 'password');

        if (Auth::guard('web')->attempt($credentials)) {
            $user = User::query()->where('email', $validate['email'])->first();
            $user->roles;
            $token = $user->createToken('personal_access_token')->accessToken;

            return response()->json([
                'message'   =>  'logged in successfully!',
                'data'      =>  $user,
                'token'     =>  $token,
            ], 200);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json([
            'mesasge'   =>  'token deleted successfully!'
        ], 200);
    }
}
