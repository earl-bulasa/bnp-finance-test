<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payment;

class PaymentController extends Controller
{
    public function store(Request $request)
    {
        $payment = new Payment;
        $payment->user_id = $request->user_id;
        $payment->amount = $request->amount;
        $payment->save();
        return response()->json([
            'msg' => 'Payed successfully'
        ], 200);
    }
}
