package main

import (
	"backend/controllers"
	"backend/database"
	"backend/middlewares"

	"github.com/gin-gonic/gin"
)

func main() {
	// Initialize Database
	database.Connect("host=localhost user=postgres password=postgres dbname=pptp_database port=5432 sslmode=disable TimeZone=Asia/Jakarta")
	database.Migrate()
	// Initialize Router
	router := initRouter()
	router.Run(":8080")
}
func initRouter() *gin.Engine {
	router := gin.Default()
	api := router.Group("/api")
	{
		api.POST("/token", controllers.GenerateToken)
		api.POST("/user/register", controllers.RegisterUser)
		secured := api.Group("/secured").Use(middlewares.Auth())
		{
			secured.GET("/ping", controllers.Ping)
		}
	}
	return router
}
