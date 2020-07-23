package config

import "fmt"

type MysqlConfig struct {
	host     string
	port     int
	user     string
	password string
	database string
}

var mysqlConfig = MysqlConfig{
	host:     "127.0.0.1",
	port:     3306,
	user:     "feng",
	password: "123456",
	database: "doc",
}

func Mysql() string {
	s := fmt.Sprintf(
		"%s:%s@tcp(%s:%d)/%s?charset=utf8",
		mysqlConfig.user,
		mysqlConfig.password,
		mysqlConfig.host,
		mysqlConfig.port,
		mysqlConfig.database)
	return s
}
