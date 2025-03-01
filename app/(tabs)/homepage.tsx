import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Mock data for posts
const POSTS = [
    {
        id: '1',
        author: {
            name: 'Jane Smith',
            title: 'Product Manager at Tech Co',
            avatar: 'https://randomuser.me/api/portraits/women/19.jpg',
            images: 'https://thumbs.dreamstime.com/b/vector-social-media-post-template-sample-text-abstract-background-background-social-media-post-template-113991363.jpg',
        },
        content: 'Excited to share that our team just launched a new feature that will help millions of users!',
        timestamp: '1h',
        likes: 230,
        comments: 45
    },
    {
        id: '2',
        author: {
            name: 'David Chen',
            title: 'Software Engineer at Dev Inc',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            images: 'https://thumbs.dreamstime.com/b/vector-social-media-post-template-sample-text-abstract-background-background-social-media-post-template-113991363.jpg',
        },
        content: 'Just published my article on React Native performance optimization techniques. Check it out in the comments!',
        timestamp: '3h',
        likes: 112,
        comments: 28
    },
    {
        id: '3',
        author: {
            name: 'Sarah Johnson',
            title: 'Marketing Director | Speaker | Consultant',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            images: 'https://thumbs.dreamstime.com/b/vector-social-media-post-template-sample-text-abstract-background-background-social-media-post-template-113991363.jpg',
        },
        content: 'Looking for recommendations on project management tools for remote teams. What is everyone using these days?',
        timestamp: '5h',
        likes: 67,
        comments: 39
    }
];

const homepage = () => {
    const [searchText, setSearchText] = useState('');

    // Header component with search bar
    const Header = () => (
        <View className="flex-row items-center p-3 bg-white border-b border-gray-200">
            <Image
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                className="w-8 h-8 rounded-full"
            />
            <TouchableOpacity className="flex-1 bg-gray-100 rounded-full px-4 py-2 mx-2">
                <Text className="text-gray-500">Search...</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text className="text-2xl">💬</Text>
            </TouchableOpacity>
        </View>
    );

    // Post creation card
    const CreatePost = () => (
        <View className="bg-white p-3 mt-2">
            <View className="flex-row items-center">
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                    className="w-10 h-10 rounded-full"
                />
                <TouchableOpacity className="flex-1 border border-gray-300 rounded-full px-4 py-2 ml-2">
                    <Text className="text-gray-500">Share an update...</Text>
                </TouchableOpacity>
            </View>
            <View className="flex-row justify-between mt-3">
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-xl mr-1">📷</Text>
                    <Text className="text-gray-600">Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-xl mr-1">🎥</Text>
                    <Text className="text-gray-600">Video</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-xl mr-1">📅</Text>
                    <Text className="text-gray-600">Event</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="text-xl mr-1">📝</Text>
                    <Text className="text-gray-600">Write</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Individual post component
    const Post = ({ post }) => (
        <View className="bg-white p-4">
            <View className="flex-row">
                <Image
                    source={{ uri: post.author.avatar }}
                    className="w-12 h-12 rounded-full"
                />
                <View className="ml-3 flex-1">
                    <Text className="font-bold text-gray-900">{post.author.name}</Text>
                    <Text className="text-gray-500 text-sm">{post.author.title}</Text>
                    <Text className="text-gray-400 text-xs">{post.timestamp}</Text>
                </View>
                <TouchableOpacity>
                    <Text className="text-xl text-gray-500">•••</Text>
                </TouchableOpacity>
            </View>

            <Text className="mt-3 text-gray-800">{post.content}</Text>
            <Image
                source={{ uri: post.author.images }}
                className="w-full mt-3 rounded-md"
                style={{ height: undefined, aspectRatio: 1 }} // Maintain aspect ratio
                resizeMode="contain"
            />


            <View className="flex-row justify-between mt-3 pt-2 border-t border-gray-100">
                <Text className="text-gray-500 text-sm">👍 {post.likes}</Text>
                <Text className="text-gray-500 text-sm">{post.comments} comments</Text>
            </View>

            <View className="flex-row justify-between mt-2 pt-2 border-t border-gray-200">
                <TouchableOpacity className="flex-row items-center">
                    <Text className="mr-1">👍</Text>
                    <Text className="text-gray-600">Like</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="mr-1">💬</Text>
                    <Text className="text-gray-600">Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="mr-1">↪️</Text>
                    <Text className="text-gray-600">Share</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-row items-center">
                    <Text className="mr-1">📤</Text>
                    <Text className="text-gray-600">Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    // Bottom navigation component
    const BottomNavigation = () => (
        <View className="flex-row justify-between p-3 bg-white border-t border-gray-200">
            <TouchableOpacity className="items-center">
                <Text className="text-xl">🏠</Text>
                <Text className="text-xs text-blue-600 font-bold">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Text className="text-xl">👥</Text>
                <Text className="text-xs text-gray-500">My Network</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Text className="text-xl">➕</Text>
                <Text className="text-xs text-gray-500">Post</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Text className="text-xl">🔔</Text>
                <Text className="text-xs text-gray-500">Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                <Text className="text-xl">💼</Text>
                <Text className="text-xs text-gray-500">Jobs</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-100">
            <Header />
            <ScrollView className="flex-1">
                <CreatePost />

                {/* Feed divider */}
                <View className="h-2 bg-gray-100" />

                {/* Posts feed */}
                {POSTS.map(post => (
                    <React.Fragment key={post.id}>
                        <Post post={post} />
                        <View className="h-2 bg-gray-100" />
                    </React.Fragment>
                ))}
            </ScrollView>
            <BottomNavigation />
        </SafeAreaView>
    );
};

export default homepage;