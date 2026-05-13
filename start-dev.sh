#!/bin/bash
cd api && npm start &
API_PID=$!
cd client && npm start &
CLIENT_PID=$!
wait $API_PID $CLIENT_PID
