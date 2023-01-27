<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmailRequest;
use Illuminate\Http\Request;
use App\Models\Email;

class EmailController extends Controller
{

    public function index()
    {
        $emails = Email::all();
        return response()->json([
            'data' => $emails,
        ]);
    }

    public function store(StoreEmailRequest $request)
    {
        Email::create($request->validated());
        return response()->json([
            'data' => [
                'message' => 'Email created successfully',
            ],
        ]);
    }
}
