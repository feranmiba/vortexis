"use client"


import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileTab from "@/components/dashboard/ProfileTab";

const Settings = () => {
  return (
    <div className="min-h-screen bg-white rounded-2xl p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="mt-6">
            <ProfileTab />
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Notification Settings</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </TabsContent>
          
          <TabsContent value="account" className="mt-6">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
