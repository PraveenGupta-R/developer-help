import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/home/home';
import { JavaComponent } from './dashboard/java/java';
import { SpringComponent} from './dashboard/spring/spring';
import { SpringBootComponent } from './dashboard/spring-boot/spring-boot';
import { MicroservicesComponent } from './dashboard/microservices/microservices';
import { DockerComponent } from './dashboard/docker/docker';
import { AwsComponent } from './dashboard/aws/aws';
import { KafkaComponent } from './dashboard/kafka/kafka';
import { CourseComponent } from './dashboard/course/course';


export const routes: Routes = [
   { path: '', component: HomeComponent },
  { path: 'java', redirectTo: 'java/basics', pathMatch: 'full' },
  { path: 'java/:topic', component: JavaComponent },
  { path: 'spring', component: SpringComponent },
  { path: 'spring-boot', component: SpringBootComponent },
  { path: 'microservices', component: MicroservicesComponent },
  { path: 'docker', component: DockerComponent },
  { path: 'aws', component: AwsComponent },
  { path: 'kafka', component: KafkaComponent },
  {path: 'course', component: CourseComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }