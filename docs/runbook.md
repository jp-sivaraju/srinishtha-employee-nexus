
# Srinishtha Hub - Operations Runbook

## Table of Contents
1. [System Architecture](#system-architecture)
2. [Deployment Procedures](#deployment-procedures)
3. [Monitoring & Alerting](#monitoring--alerting)
4. [Incident Response](#incident-response)
5. [Maintenance Procedures](#maintenance-procedures)
6. [Backup & Recovery](#backup--recovery)
7. [Performance Optimization](#performance-optimization)
8. [Security Operations](#security-operations)

## System Architecture

### Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with Shadcn/UI components
- **State Management**: TanStack React Query v5
- **Routing**: React Router DOM v6
- **Charts**: Recharts v2
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **Form Management**: React Hook Form with Zod validation

### Component Architecture
```
src/
├── components/
│   ├── layout/           # App layout components
│   ├── ui/              # Reusable UI components
│   ├── projects/        # Project management components
│   ├── hr/              # HR module components
│   └── performance/     # Performance tracking components
├── pages/               # Route components
├── hooks/               # Custom React hooks
└── lib/                 # Utility functions
```

### Module Structure
1. **Project Management**: Dashboard, Tasks, Deliverables, Timesheets, PMO, Integrations, Import/Export
2. **HR Zone**: Employee management, Leave (Nexus), Attendance, Performance, Recruitment
3. **Performance**: Individual and team performance tracking
4. **Finance**: Budget and expense management
5. **IT Helpdesk**: Ticket and asset management
6. **Knowledge Base**: Documentation and article management

## Deployment Procedures

### Development Environment Setup
```bash
# Clone repository
git clone [repository-url]
cd srinishtha-hub

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Production Deployment
1. **Pre-deployment Checklist**
   - [ ] All tests passing
   - [ ] Code review completed
   - [ ] Environment variables configured
   - [ ] Database migrations ready
   - [ ] Backup completed

2. **Deployment Steps**
   ```bash
   # Build production assets
   npm run build
   
   # Deploy to hosting platform
   # (Platform-specific commands)
   
   # Verify deployment
   # Check application health endpoints
   ```

3. **Post-deployment Verification**
   - [ ] Application loads successfully
   - [ ] All modules accessible
   - [ ] Integrations functioning
   - [ ] Performance metrics within acceptable range

### Environment Configuration
```env
# Required Environment Variables
VITE_APP_NAME=Srinishtha Hub
VITE_API_URL=https://api.srinishtha.com
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
```

## Monitoring & Alerting

### Key Metrics to Monitor
1. **Application Performance**
   - Page load times (target: <3 seconds)
   - API response times (target: <500ms)
   - Error rates (target: <1%)
   - User session duration

2. **System Health**
   - CPU usage (alert: >80%)
   - Memory usage (alert: >85%)
   - Disk space (alert: >90%)
   - Network connectivity

3. **Business Metrics**
   - Daily active users
   - Module usage statistics
   - Feature adoption rates
   - User satisfaction scores

### Alerting Configuration
```yaml
# Example alert configurations
alerts:
  - name: High Error Rate
    condition: error_rate > 5%
    severity: critical
    notification: slack, email
    
  - name: Slow Response Time
    condition: avg_response_time > 2s
    severity: warning
    notification: slack
    
  - name: Integration Failure
    condition: integration_status == "failed"
    severity: critical
    notification: phone, email
```

### Dashboard Setup
1. **System Overview Dashboard**
   - Application uptime
   - Response time trends
   - Error rate graphs
   - User activity metrics

2. **Business Dashboard**
   - Module usage statistics
   - Project completion rates
   - HR metrics (leave balances, attendance)
   - Financial KPIs

## Incident Response

### Incident Severity Levels
1. **P0 - Critical**: System down, data loss, security breach
2. **P1 - High**: Major feature broken, performance degraded
3. **P2 - Medium**: Minor feature issues, workaround available
4. **P3 - Low**: Cosmetic issues, documentation updates

### Response Procedures

#### P0 Critical Incidents
1. **Immediate Response (0-15 minutes)**
   - Acknowledge incident
   - Form incident response team
   - Create incident channel
   - Begin impact assessment

2. **Investigation (15-60 minutes)**
   - Identify root cause
   - Implement temporary fix if possible
   - Communicate status to stakeholders
   - Escalate if needed

3. **Resolution (1-4 hours)**
   - Implement permanent fix
   - Verify system functionality
   - Monitor for additional issues
   - Document incident details

#### Incident Communication Template
```
Subject: [P0/P1/P2/P3] - [Brief Description]

Status: Investigating/Identified/Monitoring/Resolved
Start Time: [Timestamp]
Impact: [Description of user impact]
Next Update: [Timestamp]

Details:
[Description of the incident and current status]

Actions Taken:
- [List of actions taken so far]

Next Steps:
- [Planned next steps]
```

### Common Issues & Solutions

#### Application Not Loading
1. Check browser console for JavaScript errors
2. Verify network connectivity
3. Check CDN status
4. Verify hosting platform status
5. Check for DNS issues

#### Integration Failures
1. Verify API credentials
2. Check rate limiting
3. Test webhook endpoints
4. Review integration logs
5. Validate data formats

#### Performance Issues
1. Check browser caching
2. Analyze network requests
3. Review database query performance
4. Check for memory leaks
5. Analyze bundle size

## Maintenance Procedures

### Daily Maintenance
- [ ] Review system alerts
- [ ] Check backup completion
- [ ] Monitor performance metrics
- [ ] Review error logs
- [ ] Check integration status

### Weekly Maintenance
- [ ] Review user feedback
- [ ] Analyze usage patterns
- [ ] Update documentation
- [ ] Review security logs
- [ ] Plan upcoming features

### Monthly Maintenance
- [ ] Generate performance reports
- [ ] Review and update monitoring
- [ ] Conduct security assessment
- [ ] Update dependencies
- [ ] Review disaster recovery procedures

### Quarterly Maintenance
- [ ] Conduct full system review
- [ ] Update capacity planning
- [ ] Review and update runbooks
- [ ] Conduct disaster recovery test
- [ ] Plan major improvements

## Backup & Recovery

### Backup Strategy
1. **Database Backups**
   - Daily full backups
   - Hourly incremental backups
   - 30-day retention policy
   - Cross-region replication

2. **Application Backups**
   - Weekly full system backups
   - Daily configuration backups
   - Version control for code
   - Asset and file backups

### Recovery Procedures
1. **Database Recovery**
   ```bash
   # Identify backup timestamp
   # Stop application services
   # Restore database from backup
   # Verify data integrity
   # Restart application services
   ```

2. **Application Recovery**
   ```bash
   # Deploy previous known good version
   # Restore configuration files
   # Verify application functionality
   # Monitor for issues
   ```

### Recovery Time Objectives (RTO)
- Critical systems: 2 hours
- Standard systems: 4 hours
- Non-critical systems: 8 hours

### Recovery Point Objectives (RPO)
- Critical data: 1 hour
- Standard data: 4 hours
- Non-critical data: 24 hours

## Performance Optimization

### Frontend Optimization
1. **Bundle Optimization**
   - Code splitting by route
   - Lazy loading components
   - Tree shaking unused code
   - Asset compression

2. **Caching Strategy**
   - Browser caching for static assets
   - API response caching
   - Component memoization
   - Service worker implementation

3. **Performance Monitoring**
   ```javascript
   // Performance tracking
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
   
   getCLS(console.log);
   getFID(console.log);
   getFCP(console.log);
   getLCP(console.log);
   getTTFB(console.log);
   ```

### Database Optimization
1. **Query Optimization**
   - Index critical queries
   - Optimize N+1 query patterns
   - Use query analysis tools
   - Implement connection pooling

2. **Data Management**
   - Archive old data
   - Optimize table structures
   - Regular maintenance tasks
   - Monitor query performance

## Security Operations

### Security Monitoring
1. **Access Monitoring**
   - Failed login attempts
   - Privilege escalation attempts
   - Unusual access patterns
   - Data export activities

2. **Vulnerability Management**
   - Regular dependency scanning
   - Security patch management
   - Penetration testing schedule
   - Code security reviews

### Security Incident Response
1. **Immediate Actions**
   - Isolate affected systems
   - Preserve evidence
   - Assess impact scope
   - Notify stakeholders

2. **Investigation Process**
   - Analyze logs and evidence
   - Identify attack vectors
   - Assess data exposure
   - Document findings

3. **Recovery Actions**
   - Patch vulnerabilities
   - Reset compromised credentials
   - Implement additional controls
   - Monitor for reoccurrence

### Compliance Requirements
- GDPR data protection compliance
- SOX financial data controls
- Industry-specific regulations
- Regular audit procedures

## Emergency Contacts

### Technical Escalation
- Platform Engineering: [contact details]
- Database Administration: [contact details]
- Security Team: [contact details]
- Network Operations: [contact details]

### Business Escalation
- IT Director: [contact details]
- CTO: [contact details]
- CEO: [contact details]
- Legal/Compliance: [contact details]

## Troubleshooting Quick Reference

### Application Issues
```bash
# Check application logs
tail -f /var/log/srinishtha/app.log

# Check system resources
top
df -h
free -m

# Test network connectivity
ping api.srinishtha.com
curl -I https://app.srinishtha.com
```

### Common Error Solutions
- **502 Bad Gateway**: Check application server status
- **503 Service Unavailable**: Check load balancer configuration
- **CORS Errors**: Verify domain whitelist
- **Authentication Errors**: Check token validity and permissions

This runbook should be reviewed and updated regularly to reflect system changes and lessons learned from incidents.
