
# Srinishtha Hub - Administrator Guide

## Table of Contents
1. [System Overview](#system-overview)
2. [User Management](#user-management)
3. [Project Management Administration](#project-management-administration)
4. [HR Zone Administration](#hr-zone-administration)
5. [Integration Management](#integration-management)
6. [Data Management](#data-management)
7. [Security Configuration](#security-configuration)
8. [Monitoring & Maintenance](#monitoring--maintenance)

## System Overview

Srinishtha Hub is a comprehensive enterprise management platform built on React, Vite, and Tailwind CSS. The system provides modular functionality across multiple business domains.

### Architecture
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with Shadcn/UI components
- **State Management**: TanStack React Query
- **Routing**: React Router DOM
- **Charts**: Recharts for data visualization

## User Management

### User Roles
1. **Super Admin**: Full system access and configuration
2. **HR Admin**: HR module management and employee data access
3. **Project Manager**: Project creation, management, and team oversight
4. **PMO**: Portfolio management and strategic oversight
5. **Team Lead**: Team management and task assignment
6. **Employee**: Standard user access to assigned modules

### Adding New Users
1. Navigate to User Management (when integrated with Supabase)
2. Click "Add User" button
3. Fill in required information:
   - Email address
   - Full name
   - Department
   - Role assignment
   - Manager relationship
4. Send invitation email
5. User completes registration process

### Role Configuration
- Assign module-specific permissions
- Configure data access levels
- Set approval hierarchies
- Define reporting relationships

## Project Management Administration

### Project Configuration
1. **Project Templates**
   - Create reusable project templates
   - Define standard task lists
   - Set default timelines and milestones
   - Configure approval workflows

2. **Task Management**
   - Configure task statuses (To Do, In Progress, Review, Done)
   - Set priority levels and color coding
   - Define task types and categories
   - Configure automated notifications

### Timesheet Administration
1. **Approval Workflows**
   - Set up manager approval chains
   - Configure automatic approval rules
   - Define rejection and revision processes

2. **Reporting Configuration**
   - Set up automated timesheet reports
   - Configure billing and payroll exports
   - Define report distribution lists

### PMO Dashboard Setup
1. **KPI Configuration**
   - Define project health metrics
   - Set threshold values for warnings
   - Configure alert notifications
   - Set up executive dashboards

2. **Budget Tracking**
   - Configure budget categories
   - Set up cost tracking methods
   - Define variance thresholds
   - Configure financial reporting

### Integration Management
1. **GitHub Integration**
   - Connect organization repositories
   - Configure webhook endpoints
   - Set up branch protection rules
   - Map users to GitHub accounts

2. **JIRA Integration**
   - Configure project mappings
   - Set up issue type synchronization
   - Configure status mappings
   - Set up user account (e)ing

3. **Slack Integration**
   - Create bot applications
   - Configure notification channels
   - Set up automated messages
   - Configure user mentions

### Import/Export Configuration
1. **Data Templates**
   - Create import templates for different data types
   - Define validation rules
   - Set up error handling procedures
   - Configure automated backups

2. **Export Scheduling**
   - Set up automated report generation
   - Configure distribution lists
   - Define export formats and schedules
   - Set up archive procedures

## HR Zone Administration

### Leave Management (Nexus)
1. **Leave Policies**
   - Configure leave types (Annual, Sick, Personal, etc.)
   - Set accrual rates and limits
   - Define carryover rules
   - Configure approval hierarchies

2. **Holiday Calendar**
   - Set up company holidays
   - Configure regional variations
   - Define floating holidays
   - Set up automatic calendar updates

### Attendance Configuration
1. **Work Schedules**
   - Define standard working hours
   - Configure flexible work arrangements
   - Set up shift patterns
   - Configure overtime rules

2. **Attendance Policies**
   - Set tardiness thresholds
   - Configure attendance tracking methods
   - Define reporting requirements
   - Set up automated notifications

### Performance Management Setup
1. **Review Cycles**
   - Configure review periods
   - Set up review templates
   - Define rating scales
   - Configure approval workflows

2. **Goal Management**
   - Set up goal categories
   - Configure alignment hierarchies
   - Define progress tracking methods
   - Set up automated reminders

## Data Management

### Backup Procedures
1. **Automated Backups**
   - Configure daily automated backups
   - Set up backup retention policies
   - Configure backup verification procedures
   - Set up backup monitoring alerts

2. **Data Recovery**
   - Document recovery procedures
   - Test recovery processes regularly
   - Maintain recovery time objectives
   - Configure disaster recovery protocols

### Data Import/Export
1. **Bulk Operations**
   - Schedule regular data exports
   - Configure data validation rules
   - Set up error handling procedures
   - Monitor import/export logs

2. **Data Migration**
   - Plan migration procedures
   - Configure data mapping rules
   - Set up validation checkpoints
   - Document rollback procedures

## Security Configuration

### Access Control
1. **Role-Based Permissions**
   - Configure module access by role
   - Set up data visibility rules
   - Configure action permissions
   - Set up approval requirements

2. **Authentication**
   - Configure password policies
   - Set up multi-factor authentication
   - Configure session timeouts
   - Set up account lockout policies

### Audit Logging
1. **Activity Monitoring**
   - Configure audit log settings
   - Set up critical action alerts
   - Configure log retention policies
   - Set up log analysis procedures

2. **Compliance Reporting**
   - Generate compliance reports
   - Configure automated compliance checks
   - Set up violation alerts
   - Maintain compliance documentation

## Monitoring & Maintenance

### System Monitoring
1. **Performance Metrics**
   - Monitor response times
   - Track user activity patterns
   - Monitor system resource usage
   - Set up performance alerts

2. **Error Monitoring**
   - Configure error logging
   - Set up critical error alerts
   - Monitor system health checks
   - Track resolution times

### Regular Maintenance
1. **Weekly Tasks**
   - Review system performance metrics
   - Check backup completion
   - Review security logs
   - Update user access permissions

2. **Monthly Tasks**
   - Generate usage reports
   - Review integration health
   - Update system documentation
   - Conduct security reviews

3. **Quarterly Tasks**
   - Review and update policies
   - Conduct disaster recovery tests
   - Review user feedback
   - Plan system improvements

### Troubleshooting Common Issues

#### Performance Issues
- Check browser cache and cookies
- Verify network connectivity
- Review system resource usage
- Check for conflicting browser extensions

#### Integration Issues
- Verify API credentials and permissions
- Check webhook configurations
- Review integration logs
- Test connection endpoints

#### Data Issues
- Verify data format compliance
- Check validation rules
- Review import/export logs
- Validate data integrity

### Support Procedures
1. **User Support**
   - Maintain support documentation
   - Configure help desk integration
   - Set up user training programs
   - Provide self-service resources

2. **Escalation Procedures**
   - Define support tier levels
   - Configure escalation triggers
   - Set up emergency contacts
   - Maintain vendor support contacts

## Best Practices
- Regular system updates and patches
- Continuous monitoring and alerting
- Regular backup testing
- User training and documentation updates
- Security assessments and improvements
- Performance optimization reviews
