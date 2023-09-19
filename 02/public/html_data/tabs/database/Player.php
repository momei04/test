<?php

namespace public\html_data\tabs\database;

class Player
{
    function getPlayerData()
    {
        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://transfermarket.p.rapidapi.com/players/get-header-info?id=74842&domain=de",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => [
                "X-RapidAPI-Host: transfermarket.p.rapidapi.com",
                "X-RapidAPI-Key: ced8202e38mshec5f19b7fa1570bp1db34ejsn9a1df5262c3d"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            echo "cURL Error #:" . $err;
        } else {
            echo $response;
        }
        return $response;
    }
}


