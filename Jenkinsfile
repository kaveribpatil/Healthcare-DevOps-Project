pipeline {
    agent any

    stages {

        stage('Debug Workspace') {
            steps {
                sh '''
                echo "Current Directory:"
                pwd

                echo "Workspace Files:"
                ls -la
                '''
            }
        }

        stage('Stop Old Containers') {
            steps {
                sh '''
                cd $WORKSPACE
                docker compose down || true
                '''
            }
        }

        stage('Build & Run') {
            steps {
                sh '''
                cd $WORKSPACE
                docker compose up --build -d
                '''
            }
        }

        stage('Check Running Containers') {
            steps {
                sh '''
                docker ps
                '''
            }
        }
    }
}