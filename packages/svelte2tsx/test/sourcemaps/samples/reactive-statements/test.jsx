/** tested-ranges: [[21,4,"prop"],[30,3,"foo"],[36,4,"prop"],[46,3,"bar"],[53,4,"prop"],[67,3,"bar"],[74,3,"foo"],[88,3,"foo"],[93,3,"bar"]] */       {/**
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
     let prop/*Ωignore_startΩ*/;let $prop = __sveltets_2_store_get(prop);/*Ωignore_endΩ*/                                                             {/**
         #===                                                                              [generated] line 4                                          */}
    export let prop                                                                                                                                   {/**
               #===                                                                        [original] line 2                                          
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    let  foo = __sveltets_2_invalidate(() => prop);                                                                                                   {/**
         1==                                 2===                                          [generated] line 5                                          */}
    $: foo = prop;                                                                                                                                    {/**
       1==   2===                                                                          [original] line 3                                          
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    let  bar = __sveltets_2_invalidate(() => (__sveltets_2_store_get(prop), $prop));                                                                  {/**
         1==                                                         2===                  [generated] line 6                                          */}
    $: bar = $prop;                                                                                                                                   {/**
       1==    2===                                                                         [original] line 4                                          
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    ;() => {$: if (bar) ++foo}                                                                                                                        {/**
                   1==    2==                                                              [generated] line 7                                          */}
    $: if (bar) ++foo                                                                                                                                 {/**
           1==    2==                                                                      [original] line 5                                          
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    ;() => {$: { if (foo) bar(); }}                                                                                                                   {/**
                     1==  2==                                                              [generated] line 8                                          */}
    $: { if (foo) bar(); }                                                                                                                            {/**
             1==  2==                                                                      [original] line 6                                          
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
/** origin-hash: 1jziapq */