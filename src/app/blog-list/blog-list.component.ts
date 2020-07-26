import {
  Component,
  OnInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[][];
  currPage: number;
  //@ViewChild('tile') blogposttilecomponent:BlogPostTileComponent;
  @ViewChildren('tile') blogposttilecomponents: QueryList<
    BlogPostTileComponent
  >;

  constructor(private blogDataService: BlogDataService) {}

  ngOnInit() {
    this.currPage = 0;
    // console.log(this.blogPosts[0].title);
    this.blogPosts = this.blogDataService.getData();
  }
  updatePage(newPage) {
    this.currPage = newPage;
  }
  expandAll() {
    // this.blogposttilecomponent.showFullSummary();
    this.blogposttilecomponents.forEach((e) => e.showFullSummary());
  }
  favAll(){
    this.blogPosts[this.currPage].forEach(post=>post.isFav=true);
  }
}
