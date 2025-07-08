'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  author: z.string().min(2, {
    message: 'Author name must be at least 2 characters.',
  }),
  image: z.string().url({
    message: 'Please enter a valid URL for the image.',
  }),
  intro: z.string().min(10, {
    message: 'Intro must be at least 10 characters.',
  }),
  body: z.string().min(50, {
    message: 'Body must be at least 50 characters.',
  }),
  tags: z.string().min(2, {
    message: 'Please add at least one tag.',
  }),
})


export default function CreatePostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      author: '',
      image: '',
      intro: '',
      body: '',
      tags: '',
    },
  })

  const { toast } = useToast()

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: 'Post created successfully',
      description: 'Your post has been saved as a draft.',
      variant: 'success',
    })
    console.log(JSON.stringify(values, null, 2))
  }

  return (
    <div className="dashboard-container pt-8">
      <div className="mb-6">
        <h2 className="py-1">Create New Post</h2>
        <p className="text-muted-foreground dark:text-muted">Create a new blog post. All fields are required.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-4xl mx-auto">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter post title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='sm:grid sm:grid-cols-2 sm:gap-4'>
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Author</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select author" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="john-doe">John Doe</SelectItem>
                      <SelectItem value="jane-smith">Jane Smith</SelectItem>
                      <SelectItem value="bob-wilson">Bob Wilson</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Featured Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter image URL" {...field} />
                  </FormControl>
                  <FormDescription >
                    Provide a URL for the post&apos;s featured image
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="intro"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Introduction</FormLabel>
                <FormControl>
                  <Textarea
                    className="border-gray-300 resize-none"
                    placeholder="Write a short introduction..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body Content</FormLabel>
                <FormControl>
                  <Textarea
                    className="border-gray-300 min-h-[200px] resize-none"
                    placeholder="Write your post content..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tags</FormLabel>
                <FormControl>
                  <Input

                    placeholder="Enter tags separated by commas"
                    {...field}
                  />
                </FormControl>
                <FormDescription >
                  Add tags separated by commas (e.g. technology, programming, web)
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end space-x-4 pt-4 max-w-4xl mx-auto">
            <Button variant="outline" type="button" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-100">
              Save as Draft
            </Button>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
              Publish Post
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

``
