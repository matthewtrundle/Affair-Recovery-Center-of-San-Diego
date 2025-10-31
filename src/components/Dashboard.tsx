'use client'

import React from 'react'
import { Banner } from '@payloadcms/ui'

export const Dashboard: React.FC = () => {
  return (
    <div className="custom-dashboard">
      <div className="dashboard-header">
        <h1>Welcome to ARC Admin</h1>
        <p>Manage your blog content and newsletter subscribers</p>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-grid">
          <a href="/admin/collections/posts/create" className="action-card action-primary">
            <div className="action-icon">✍️</div>
            <div className="action-content">
              <h3>Write New Post</h3>
              <p>Create a new blog article</p>
            </div>
          </a>

          <a href="/admin/collections/subscribers" className="action-card action-secondary">
            <div className="action-icon">📧</div>
            <div className="action-content">
              <h3>View Subscribers</h3>
              <p>Manage your email list</p>
            </div>
          </a>

          <a href="/admin/collections/media/create" className="action-card">
            <div className="action-icon">📸</div>
            <div className="action-content">
              <h3>Upload Image</h3>
              <p>Add media to library</p>
            </div>
          </a>

          <a href="/admin/collections/categories" className="action-card">
            <div className="action-icon">🏷️</div>
            <div className="action-content">
              <h3>Manage Categories</h3>
              <p>Organize blog topics</p>
            </div>
          </a>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-section">
        <h2>Overview</h2>
        <div className="stats-grid">
          <StatsCard title="Total Posts" icon="📝" />
          <StatsCard title="Subscribers" icon="👥" />
          <StatsCard title="Draft Posts" icon="📄" />
          <StatsCard title="This Month" icon="📅" />
        </div>
      </div>

      {/* Help Section */}
      <div className="help-section">
        <Banner type="info">
          <strong>Need Help?</strong> Check out the{' '}
          <a href="https://payloadcms.com/docs" target="_blank" rel="noopener noreferrer">
            documentation
          </a>{' '}
          or contact support if you have questions.
        </Banner>
      </div>
    </div>
  )
}

// Simple stats card component
const StatsCard: React.FC<{ title: string; icon: string }> = ({ title, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-value">Loading...</p>
      </div>
    </div>
  )
}
