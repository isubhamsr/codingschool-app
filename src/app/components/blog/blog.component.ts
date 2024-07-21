import { Component, OnInit, signal } from '@angular/core';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogpostService } from '../../services/blogpost.service';
import { BlogPost } from '../../../models/BlogPost';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogsComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  constructor(private blogpostService: BlogpostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  posts: any;
  isLoading = signal(false);

  fetchPosts() {
    this.isLoading.update((pre) => {
      return !pre;
    });
    this.blogpostService.fetchAllBlogs().subscribe({
      next: (data: any) => {
        this.posts = data.data;
        this.isLoading.update((pre) => {
          return !pre;
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
