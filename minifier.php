<?php

class Minify{
    function minifyHtml($code){
        $search_arr = array(
            // Remove whitespaces after tags 
            '/\>[^\S ]+/s', 
            
            // Remove whitespaces before tags 
            '/[^\S ]+\</s', 
            
            // Remove multiple whitespace sequences 
            '/(\s)+/s', 
            
            // Removes comments 
            '/<!--(.|\s)*?-->/'
        );

        $replace_arr = array('>', '<', '\\1');

        $output = preg_replace($search_arr, $replace_arr, $code);

        return $output;
    }
}
