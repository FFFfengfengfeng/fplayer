package mysql

import (
	"../config"
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

func Connect() *sql.DB {
	s := config.Mysql()
	db, err := sql.Open("mysql", s)

	if err != nil {
		fmt.Printf("connect mysql fail ! [%s]", err)
	} else {
		fmt.Println("connect to mysql success")
	}

	return db
}
