'use client';

import {useEffect, Suspense} from 'react';

function TrackPageView() {
    (function (l, e, a, d, i, n, f, o) {
        if (!l[i]) {
            l.GlobalLeadinfoNamespace = l.GlobalLeadinfoNamespace || [];
            l.GlobalLeadinfoNamespace.push(i);
            l[i] = function () {
                (l[i].q = l[i].q || []).push(arguments)
            };
            l[i].t = l[i].t || n;
            l[i].q = l[i].q || [];
            o = e.createElement(a);
            f = e.getElementsByTagName(a)[0];
            o.async = 1;
            o.src = d;
            f.parentNode.insertBefore(o, f);
        }
    }(window, document, 'script', 'https://cdn.leadinfo.net/ping.js', 'leadinfo', 'LI-66951DF07CA22'));
}

export default function LeadInfo() {
    return (
        <Suspense fallback={null}>
            <TrackPageView/>
        </Suspense>
    );
}