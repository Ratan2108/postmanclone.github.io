pipeline {
  agent{ label 'Jenkins-AGENT'}
  tools { 
      jdk 'Java17'
      maven 'Maven3'
  }
  stages {
      stage("Cleanup Workspace"){
              steps{
              cleanWs()
              }
      }
      stage("Checkout from SCM"){
                steps{
                    git branch: 'main' , credentialsId: 'https://github.com/Ratan2108/postmanclone.github.io'
                }
      }
      stage("Build Application"){
          steps{
            sh "mvn clean package"
          }
      }
stage("Test Application"){
  steps {
      sh "mvn test"
  }
}
  }

}
