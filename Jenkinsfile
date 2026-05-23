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
                docker compose down --remove-orphans || true

                docker rm -f backend || true
                docker rm -f frontend || true
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