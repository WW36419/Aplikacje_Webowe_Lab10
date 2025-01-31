import { Component, Input } from '@angular/core';
import {BlogItemImageComponent} from "../blog-item-image/blog-item-image.component";
import {BlogItemTextComponent} from "../blog-item-text/blog-item-text.component";
import { CommentsSectionComponent } from '../comments-section/comments-section.component';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'blog-item',
 standalone: true,
 imports: [BlogItemImageComponent, BlogItemTextComponent, CommentsSectionComponent, CommonModule],
 templateUrl: './blog-item.component.html',
 styleUrl: './blog-item.component.css'
})
export class BlogItemComponent {
 @Input() title?: string;
 @Input() image?: string;
 @Input() text?: string;
 @Input() postId?: string;

}
