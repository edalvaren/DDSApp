using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using DDSApp.Areas.Abstractions;
using DDSApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace DDSApp.Areas.Repositories
{
    public class LikeRepository :  ILikeRepository
    {
        private SpiralDocsContext _context;
        public LikeRepository(SpiralDocsContext context)
        {
            _context = context;
        }

        public void Add(Like entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<Like>(entity);
            _context.Set<Like>().Add(entity);
        }

        public IEnumerable<Like> AllIncluding(params Expression<Func<Like, object>>[] includeProperties)
        {
            throw new NotImplementedException();
        }

        public void Commit()
        {
            _context.SaveChanges();
        }

        public int Count()
        {
            throw new NotImplementedException();
        }

        public void Delete(Like entity)
        {
            EntityEntry dbEntityEntry = _context.Entry<Like>(entity);
            dbEntityEntry.State = EntityState.Deleted;
        }

        public void DeleteWhere(Expression<Func<Like, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Like> FindBy(Expression<Func<Like, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Like> GetAll()
        {
            throw new NotImplementedException();
        }

        public Like GetSingle(string id)
        {
            throw new NotImplementedException();
        }

        public Like GetSingle(Expression<Func<Like, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        public Like GetSingle(Expression<Func<Like, bool>> predicate, params Expression<Func<Like, object>>[] includeProperties)
        {
            throw new NotImplementedException();
        }

        public void Update(Like entity)
        {
            throw new NotImplementedException();
        }
    }
}