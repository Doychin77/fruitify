<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class SecurityHeaders
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        $cspValues = [
            "base-uri 'self'",
            "connect-src 'self'",
            "default-src 'self'",
            "img-src 'self' data:",
            "media-src 'self'",
            "object-src 'none'",
            "script-src 'self'",
            "style-src 'self'",
            "font-src 'self'"
        ];

        if (app()->isProduction()) {
            $response->headers->set('Content-Security-Policy', implode("; ", $cspValues));
        }

        return $response;
    }
}
