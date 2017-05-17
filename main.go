package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type Student struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

type Teacher struct {
	Name   string `json:"name"`
	Email  string `json:"email"`
	Office string `json:"office"`
}

func teacher(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	fmt.Println("Hit method")

	data := Teacher{
		"Jane Doe",
		"janed9@university.edu",
		"100 Main Building",
	}

	blob := struct {
		Teacher Teacher `json:"teacher"`
	}{
		data,
	}

	if err := json.NewEncoder(w).Encode(blob); err != nil {
		panic(err)
	}
}

func student(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	data := Student{"John Doe", "johnd@university.edu"}

	blob := struct {
		Student Student `json:"student"`
	}{
		data,
	}

	if err := json.NewEncoder(w).Encode(blob); err != nil {
		panic(err)
	}
}

func main() {
	http.HandleFunc("/api/teacher", teacher)
	http.HandleFunc("/api/student", student)
	http.ListenAndServe(":8081", nil)
}
