package main

import (
	"./mysql"
	"fmt"
	"log"
	"net/http"
)

func handlerIndex(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(w, "hello take-off")
}

func handlerCate(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintln(w, "hello cate")
}

func main() {
	mysql.Connect()
	http.HandleFunc("/", handlerIndex)
	//http.HandleFunc("/cate", handlerCate)
	log.Fatal(http.ListenAndServe(":9999", nil))
}
