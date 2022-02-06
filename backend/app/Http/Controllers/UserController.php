<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Carbon\Carbon;

class UserController extends Controller
{
    public function listAll()
    {
        $users = User::withSum('loans', 'amount')->withSum('payments', 'amount')->whereDoesntHave('payments', function(Builder $query) {
            $query->whereDate('created_at', Carbon::today());
        })->orderBy('name', 'asc')->get();
        // $filtered_users = $users->filter(function($value, $key) {
        //     return $value->payments_sum_amount < $value->loans_sum_amount;
        // })->values();
        return response()->json([
            'users' => $users
        ], 200);
    }
}
