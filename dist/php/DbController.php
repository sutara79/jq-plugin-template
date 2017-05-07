<?php
namespace myapp;

final class DbController
{
    public function getInfo($q)
    {
        return $q . '-processed';
    }
}